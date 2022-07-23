import { Search2Icon } from "@chakra-ui/icons"
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"

function Query(){
    return (
        <Box marginTop={"12px"}>
            <InputGroup h="50px" >
                <InputLeftElement
                marginTop={"5px"}
                pointerEvents='none'
                children={<Search2Icon color='teal' fontSize={"22px"} marginLeft="10px" marginRight={"10px"} />}
                />
                <Input type='text' placeholder='Search by car or model brand' h="50px"  borderColor="gray" colorScheme={"green"} />
            </InputGroup>
        </Box>
    )
}

export {Query}