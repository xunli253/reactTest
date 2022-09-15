import { ChakraProvider } from '@chakra-ui/react'
import DropDownButtons from './dropDownButtons';


function App() {
    return (
        <div className="App">
            <ChakraProvider>
                <DropDownButtons />
            </ChakraProvider>
        </div>
    );
}

export default App;