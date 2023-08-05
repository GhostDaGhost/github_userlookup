import { Container, Title, Text } from "@mantine/core";

export const ProfileBio = (props: ProfileBio) => {
    return (
        <Container mb={15}>
            <Title order={3} color="white" mb={5}>Bio:</Title>
            <Text color="darkgray">{props.bio}</Text>
        </Container>
    )
}
