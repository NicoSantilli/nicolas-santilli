import { ComingSoon } from "./pages/coming-soon"

export const App = () => {
  // const onToggleMode = () => {
  //     const body = document.body;
  //     if (body.classList.contains('dark')) {
  //       body.classList.remove('dark');
  //     } else {
  //       body.classList.add('dark');
  //     }
  // }
  return <div className="min-h-screen dark:bg-background-primary bg-background-primary-light">
    {/* <button onClick={onToggleMode}>Test</button> */}
    <ComingSoon />
  </div>
}
