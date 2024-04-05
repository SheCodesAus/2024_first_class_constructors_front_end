import SignupForm from "../components/SignupForm";

function SignupPage() {
    return (
        <div className="m-8">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="font-fredoka text-h2 text-primary-200 tracking-wider">Sign Up to Gift Compare!</h1>
          <div>
          <SignupForm />
          </div>
        </div>
      </div>
    )
}

export default SignupPage;