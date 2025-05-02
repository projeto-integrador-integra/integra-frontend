import { Box, Card, Heading, Table, Tag, Text } from '@chakra-ui/react'

import { ProjectType } from '@/schema/project.schema'
import { statusColor } from '@/utils/status'

interface ProjectCardProps extends ProjectType {
  children?: React.ReactNode
}

export const ProjectCard = ({
  name,
  status,
  description,
  tags,
  members,
  children,
}: ProjectCardProps) => {
  return (
    <Card.Root p="4" borderWidth="1px" borderRadius="lg" mb="4" variant="elevated">
      <Card.Header>
        <Tag.Root
          colorScheme="blue"
          mb="2"
          w="fit-content"
          colorPalette={statusColor[status].color}
          variant="solid"
        >
          <Tag.Label>{statusColor[status].label}</Tag.Label>
        </Tag.Root>
        <Heading as="h1" mt="4" fontWeight="bold" fontSize="x-large">
          {name}
        </Heading>
        <Card.Description my="4">{description}</Card.Description>
      </Card.Header>
      <Card.Body>
        <Heading>TAGS</Heading>
        <Box display="flex" flexWrap="wrap" mt="2">
          {tags?.map((tag) => (
            <Tag.Root
              key={tag}
              colorScheme="teal"
              mr="2"
              mb="2"
              w="fit-content"
              colorPalette="teal"
              variant="outline"
            >
              <Tag.Label fontSize="sm" p="2">
                {tag}
              </Tag.Label>
            </Tag.Root>
          ))}
        </Box>
        <Heading mt="8">VOLUNTÁRIOS</Heading>
        <Table.ScrollArea borderWidth="1px" rounded="md" height="160px">
          <Table.Root size="sm" stickyHeader>
            <Table.Header>
              <Table.Row bg="bg.subtle" fontWeight="bold">
                <Table.ColumnHeader pl="4">Perfil</Table.ColumnHeader>
                <Table.ColumnHeader>Nome</Table.ColumnHeader>
                <Table.ColumnHeader pr="4" textAlign="end">
                  Email
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {members?.map((member) => (
                <Table.Row key={member.id}>
                  <Table.Cell pl="4">{member.role}</Table.Cell>
                  <Table.Cell>{member.name}</Table.Cell>
                  <Table.Cell pr="4" textAlign="end">
                    {member.email}
                  </Table.Cell>
                </Table.Row>
              ))}

              {members?.length === 0 && (
                <Table.Row>
                  <Table.Cell colSpan={3} textAlign="center">
                    <Text color="gray.500">Nenhum voluntário encontrado</Text>
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>
        {children}
      </Card.Body>
    </Card.Root>
  )
}
