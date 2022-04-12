import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Row, Col, Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { listProducts, deleteProduct, createProduct } from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../constants/productConstants'




function ProductListScreen({ history, match }) {

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

        if (userInfo === null) {
            navigate(`/sign-in/`)
            window.location.reload(false);
        }

        if (!userInfo.isSeller) {
            navigate(`/sign-in`)
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
    // console.log('user info', userInfo.id)
    // try{
    //     console.log('products',products[1].user)
    // }catch(e){
    //     console.log('error',e)
    // }


// }
    // console.log('products',products[1]._id)
    // console.log('user info', userInfo.id)
  return (
    <div>
        <Row className='align-items-center'>
            <Col md='8'>
                <h1>Product List</h1>
            </Col>
            <Col md='1'>{/* Empty column for spacing */}</Col>
            <Col md='3'>
                <Button variant='secondary' onClick={createProductHandler}>
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
                    <Table striped bordered hover responsive className='table-md'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (

                                // {product._id == userInfo.id}
                                <tr key={product._id} className="table_items">
                                {product.user == userInfo.id &&
                                <>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>$ {product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.brand}</td>
                                    <td className="td_btns">
                                        <LinkContainer to={`/seller/product/${product._id}/edit`}>
                                            <Button variant='light' className='btn-sm'>
                                                <i className='fas fa-edit'></i>
                                            </Button>
                                        </LinkContainer>
                                        <Button variant='danger' className='btn-sm trash_item' onClick={() => deleteHandler(product._id)}>
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </td>
                                </>
                                
                            }
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

export default ProductListScreen
