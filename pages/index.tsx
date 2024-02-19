import Button from "../src/components/Button/Button";
import ThemeProvider from "../src/theme/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <div>
        <h1>Homepage</h1>
        <Button variant="accent">Simple button</Button>
      </div>
    </ThemeProvider>

  )
}
