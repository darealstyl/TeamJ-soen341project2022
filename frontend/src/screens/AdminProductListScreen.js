import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Row, Col, Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { listProducts, deleteProduct, createProduct } from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../constants/productConstants'




function AdminProductListScreen({ history, match }) {

    const dispatch = useDispatch()

    let navigate = useNavigate();

    const productList = useSelector(state => state.productList)
    const { loading, error, products, pages, page } = productList

    const productDelete = useSelector(state => state.productDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete
    
    const productCreate = useSelector(state => state.productCreate)
    const { loading: loadingCreate, error: errorCreate, success: successCreate, product:createdProduct } = productCreate

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    let keyword = useLocation().search

    useEffect(() => {
        dispatch({ type: PRODUCT_CREATE_RESET })
        
        if (userInfo == null) {
            navigate('/sign-in')
            window.location.reload(false);
        }

        if (!userInfo.isAdmin) {
            navigate('/sign-in')
        }

        if (successCreate) {
            navigate(`/seller/product/${createdProduct._id}/edit`)
        } else {
            dispatch(listProducts(keyword))
        }
            
    }, [ dispatch, history, userInfo, successDelete, successCreate, createdProduct, keyword ])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            dispatch(deleteProduct(id))
        }
    }

    const createProductHandler = () => {
        dispatch(createProduct())
    }

  return (
    <div>
        <Row className='align-items-center'>
            <Col md='8'>
                <h1>Product List</h1>
            </Col>
            <Col md='1'>{/* Empty column for spacing */}</Col>
            <Col md='3' style={{display:'flex', justifyContent:'right'}}>
                <Button variant='secondary' onClick={createProductHandler} disabled>
                    <i className='fas fa-plus'></i> Add Product
                </Button>
            </Col>
        </Row>

        {loadingDelete && <Loader />}
        {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

        {loadingCreate && <Loader />}
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

        {/* <Row> */}
        
            {loading 
            ? (<Loader />)
            : error
                ? (<Message variant ='danger'>{error}</Message>)
                : ( <div>
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Brand</th>
                                    <th>Seller</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product => (
                                    <tr key={product._id}>
                                        <td>{product._id}</td>
                                        <td>{product.name}</td>
                                        <td>$ {product.price}</td>
                                        <td>{product.category}</td>
                                        <td>{product.brand}</td>
                                        <td>{product.user}</td>
                                        <td>
                                            <LinkContainer to={`/seller/product/${product._id}/edit`}>
                                                <Button variant='light' className='btn-sm'>
                                                    <i className='fas fa-edit'></i>
                                                </Button>
                                            </LinkContainer>
                                            <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(product._id)}>
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </td>
                                    </tr>
                                    
                                )
                                    )}
                            </tbody>    
                        </Table>
                        <Paginate pages={pages} page={page} isAdmin={true}/>
                    </div>      
                )
        
            }       
        {/* </Row> */}
        
    </div>
  )
}

export default AdminProductListScreen
