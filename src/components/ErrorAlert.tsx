import { Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

export const ErrorAlert = (props: ErrorAlert) => {
    return (
        <Alert icon={<IconAlertCircle size="1rem" />} title="Error" color="red" mb={30} withCloseButton onClose={props.onClose}>
            {props.message}
        </Alert>
    )
}
