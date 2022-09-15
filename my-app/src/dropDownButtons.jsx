import React, { useState } from 'react'
import { GrDown, GrUp } from "react-icons/gr"
import { Center, IconButton } from '@chakra-ui/react'
import { Collapse } from '@chakra-ui/react'
const DropDownButtons = () => {


    const [show, setShow] = useState(false)

    const handleToggle = () => setShow(!show)




    return (
        <div style={{ margin: "auto", width: "20%", display: "flex", flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }} >
            <Collapse startingHeight={25} in={show}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
            </Collapse>
            <IconButton
                icon={show ? < GrUp /> : <GrDown />}
                colorScheme="white"
                size='sm'
                onClick={handleToggle}
                mt="auto" >

            </IconButton>
        </div >
    )
}

export default DropDownButtons