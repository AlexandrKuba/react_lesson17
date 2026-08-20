import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRefreshMutation, setCredentials } from "@/entities/session";
export function AppInit() {
  const [refresh] = useRefreshMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    const init = async () => {
      try {
        const result = await refresh().unwrap();
        dispatch(setCredentials(result));
      } catch (e) {
        // Відсутність активної сесії (401) — очікувана ситуація при першому вході
        if (e?.status !== 401) {
          console.error(e);
        }
      }
    };
    init();
  }, [refresh, dispatch]);
  return null;
}
