import { Tooltip } from '@/components/ui/tooltip'
import { FeedbackType } from '@/schema/feedback.schema'
import { getProjectFeedbacks } from '@/service/project'
import { Box, Link, Table, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export const FeedbackProject = ({ id }: { id: string }) => {
  const [feedbacks, setFeedbacks] = useState<FeedbackType[]>([])

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await getProjectFeedbacks(id)
        setFeedbacks(response.feedbacks)
      } catch (error) {
        console.error('Error fetching feedbacks:', error)
      }
    }
    fetchFeedbacks()
  }, [id])

  return (
    <Box>
      <Table.ScrollArea borderWidth="1px" rounded="md" height="160px">
        <Table.Root size="sm" stickyHeader>
          <Table.Header>
            <Table.Row bg="bg.subtle" fontWeight="bold">
              <Table.ColumnHeader pl="4">Usuário</Table.ColumnHeader>
              <Table.ColumnHeader>Link</Table.ColumnHeader>
              <Table.ColumnHeader>Nota</Table.ColumnHeader>
              <Table.ColumnHeader pr="4" textAlign="end">
                Comentário
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {feedbacks?.map((feedback) => (
              <Table.Row key={feedback.id}>
                <Table.Cell pl="4">{feedback.user.name}</Table.Cell>
                <Tooltip content={feedback.link}>
                  <Table.Cell
                    maxW="10ch"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    {feedback.link && (
                      <Link
                        color="blue.700"
                        textDecor="underline"
                        href={
                          feedback.link.startsWith('http')
                            ? feedback.link
                            : `https://${feedback.link}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        truncate
                      >
                        {feedback.link} asdasd asd adsads ads adada
                      </Link>
                    )}
                  </Table.Cell>
                </Tooltip>
                <Table.Cell>{feedback.rating}</Table.Cell>
                <Table.Cell pr="4" textAlign="end" maxW="30ch" textWrap="wrap">
                  {feedback.comment}a dasdads adsasd asd ad adsasda dadsa dasd ads
                </Table.Cell>
              </Table.Row>
            ))}

            {feedbacks?.length === 0 && (
              <Table.Row>
                <Table.Cell colSpan={4} textAlign="center">
                  <Text color="gray.500">Nenhum voluntário encontrado</Text>
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table.Root>
      </Table.ScrollArea>
    </Box>
  )
}
