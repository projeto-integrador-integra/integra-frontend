import { HStack } from '@chakra-ui/react'
import { useState } from 'react'
import { Button } from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HStack>
        <Button onClick={() => setCount((prev) => prev + 1)} intent="primary">
          Click me
        </Button>
        {count}
      </HStack>
    </>
  )
}

export default App
