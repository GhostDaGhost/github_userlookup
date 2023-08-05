import { Center, TextInput, Container, Button } from "@mantine/core";
import '../styles/InputBox.scss';

export const InputBox = (props: InputBox) => {
    const onKeypress = (event: any) => {
        if (event && event.key === 'Enter') {
            event.preventDefault();
            props.onKeypress();
        }
    }

    // RETURN ELEMENT
    return (
        <Container id="textinput_container" mt={18}>
            <TextInput
                id="textinput"
                placeholder="Enter username..."
                label="Please enter a username"
                aria-label="Please enter a username"
                value={props.value}
                onChange={(event: any) => props.onChange(event.target.value)}
                onKeypress={onKeypress}
                withAsterisk
            />

            <Center id="searchprofile_button_container" mt={15} mb={10}>
                <Button id="searchprofile_button" sx={{ transition: '.1s' }} onClick={props.onButtonClick}>Search</Button>
            </Center>
        </Container>
    )
}
