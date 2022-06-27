import { useNavigate } from "react-router-dom";
import views from "routes/views";

type UsePageNavigateProps = keyof typeof views;

export function usePageNavigate() {
  const navidate = useNavigate();

  function redirect(page: UsePageNavigateProps) {
    navidate(views[page]);
  }
  return redirect;
}
