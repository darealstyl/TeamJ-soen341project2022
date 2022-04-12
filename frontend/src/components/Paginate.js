import React from 'react'
import { Pagination, Paginator } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Paginate({pages, page, keyword='', isAdmin=false}) {

    if (keyword) {
        keyword = keyword.split('?keyword=')[1].split('&')[0]
    }

  return (pages > 1 && (
    <div style={{display: "flex", justifyContent: "center"}}>
      <Pagination>
          {[...Array(pages).keys()].map((x) => (
              <LinkContainer 
                key={x + 1} 
                to={!isAdmin ? 
                    `/?keyword=${keyword}&page=${x + 1}` 
                    : `/seller/product-list?keyword=${keyword}&page=${x + 1}`}> 
                  <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
              </LinkContainer>
          ))}
      </Pagination>
    </div>
    )       
  )
}

export default Paginate
