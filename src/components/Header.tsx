import { Title, Image, Center, Text, Container, Divider } from "@mantine/core";
import GitHubLogo from '../assets/githublogo.png';

export const Header = () => {
    return (
        <Container id="header_container" mt={15}>
            <Center>
                <Container id="logo_container">
                    <Image id="logo" maw={75} src={GitHubLogo} alt="github logo" />
                </Container>

                <Container>
                    <Title order={2} align="center" color="white">GitHub User Lookup</Title>
                    <Text align="center" color="darkgray">Created by Alexander Arizola</Text>
                </Container>
            </Center>

            <Divider mt={30} opacity="80%" />
        </Container>
    )
}
