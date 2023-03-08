export default function isSignUpSucceed(data: unknown) {
  return (
    data &&
    typeof data === "object" &&
    "success" in data &&
    data.success === true
  );
}
