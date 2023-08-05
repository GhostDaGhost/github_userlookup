import { Container, List, ThemeIcon } from "@mantine/core"
import { IconMapPinFilled, IconBrandTwitter, IconArticle } from "@tabler/icons-react"

export const ProfileMedia = (props: ProfileMedia) => {
    return (
        <Container mb={8}>
            <List size="md">
                <List.Item mb={10} icon={
                    <ThemeIcon color="orange" size={29} radius="xl">
                        <IconMapPinFilled size="1.2rem" />
                    </ThemeIcon>
                }>
                    {props.location ?? 'Earth'}
                </List.Item>

                {(props.xUsername && props.xUsername !== '') &&
                    <List.Item mb={10} icon={
                        <ThemeIcon color="black" size={29} radius="xl">
                            <IconBrandTwitter size="1.2rem" />
                        </ThemeIcon>
                    }>
                        X: <a href={`https://x.com/${props.xUsername}`} target="_blank">@{props.xUsername}</a>
                    </List.Item>
                }

                {(props.blog && props.blog !== '') &&
                    <List.Item mb={10} icon={
                        <ThemeIcon color="red" size={29} radius="xl">
                            <IconArticle size="1.2rem" />
                        </ThemeIcon>
                    }>
                        Blog: <a href={props.blog} target="_blank">{props.blog}</a>
                    </List.Item>
                }
            </List>
        </Container>
    )
}
