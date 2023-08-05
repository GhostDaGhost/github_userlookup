import { Container, Title, Text } from "@mantine/core";

export const ProfileCompany = (props: ProfileCompany) => {
    return (
        <Container mb={15}>
            <Title order={3} color="white" mb={5}>Company:</Title>
            <Text color="darkgray">{(props.company).replace('@', '')}</Text>
        </Container>
    )
}
