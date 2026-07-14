import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/forms/LoginForm";

export default function LoginPage() {
  return (
    <AuthCard
      title="Welcome Back"
      subtitle="Sign in to your GeoLog account"
    >
      <LoginForm />
    </AuthCard>
  );
}