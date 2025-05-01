'use client'

import {
  ButtonGroup,
  IconButton,
  type IconButtonProps,
  Pagination,
  usePaginationContext,
} from '@chakra-ui/react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { Link, useLocation } from 'react-router'

const PaginationLink = (props: IconButtonProps & { page?: 'prev' | 'next' | number }) => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const { page, ...rest } = props
  const pagination = usePaginationContext()
  const pageValue = () => {
    let targetPage = page
    console.log('pageValue', page)
    if ((page === 'prev' && !pagination.previousPage) || (page === 'next' && !pagination.nextPage))
      return null
    if (page === 'prev' && pagination.previousPage) targetPage = pagination.previousPage
    if (page === 'next' && pagination.nextPage) targetPage = pagination.nextPage
    searchParams.set('page', String(targetPage))
    return `${location.pathname}?${searchParams.toString()}`
  }

  if (!pageValue()) return null
  return (
    <IconButton asChild {...rest}>
      <Link to={`${pageValue()}`}>{props.children}</Link>
    </IconButton>
  )
}

export const ProjectPagination = ({ count = 1, pageSize = 2, page = 1 }) => {
  return (
    <Pagination.Root count={count} pageSize={pageSize} page={page} mt="8" ml="auto" w="fit-content">
      <ButtonGroup variant="ghost" size="sm">
        <PaginationLink page="prev">
          <HiChevronLeft />
        </PaginationLink>

        <Pagination.Items
          render={(page) => (
            <PaginationLink page={page.value} variant={{ base: 'ghost', _selected: 'outline' }}>
              {page.value}
            </PaginationLink>
          )}
        />

        <PaginationLink page="next">
          <HiChevronRight />
        </PaginationLink>
      </ButtonGroup>
    </Pagination.Root>
  )
}
