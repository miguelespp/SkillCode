import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage, type AuthProvider } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

// preview-start
const providers = [{ id: "credentials", name: "Email and Password" }];
// preview-end

const signIn: (provider: AuthProvider, formData: FormData, onSuccess: () => void) => void = async (
  provider,
  formData,
  onSuccess
) => {
  const promise = new Promise<void>((resolve) => {
    setTimeout(() => {
      alert(`Signed in with ${provider.name}!`);


      resolve();
    }, 300);

  });
  await promise;
  onSuccess();
};

export default function Login() {
  const theme = useTheme();
  const navigate = useNavigate(); // Hook para la redirección

  // Función para redirigir al Dashboard después del inicio de sesión exitoso
  const handleSignInSuccess = () => {
    // Redirige al Dashboard
    navigate("/dashboard");
  };
  const handleSignIn = async (provider: AuthProvider, formData: FormData) => {
    await signIn(provider, formData, handleSignInSuccess);
  };

  return (
    // preview-start
    <AppProvider theme={theme}>
      <SignInPage signIn={ handleSignIn }
        providers={providers} />
    </AppProvider>
    // preview-end
  );
}
