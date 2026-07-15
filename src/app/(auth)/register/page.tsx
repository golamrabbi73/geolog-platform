import AuthCard from "@/components/auth/AuthCard";
import RegisterForm from "@/components/forms/RegisterForm";
// import RegisterForm from "@/components/forms/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthCard
      title="Create Account"
      subtitle="Create your GeoLog account"
    >
      {/* <RegisterForm /> */}
      <RegisterForm />
    </AuthCard>
  );
}