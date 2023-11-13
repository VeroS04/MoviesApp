import { Layout } from "../../components";
import { LoginForm } from "../../components/forms";
import { withAuth } from "../../hoc";

const LoginPage = () => {

    return (
        <Layout>
            <LoginForm />
        </Layout>
    )
}

export const Login = withAuth(LoginPage)