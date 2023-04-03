import { useRoute, useRouter } from "vue-router";
import { isObject } from "lodash";
import { copyToClipboard, useQuasar } from "quasar";

export function useHelpers() {
    const $store = useStore();
    const $router = useRouter();
    const $route = useRoute();
    const $q = useQuasar();

    function openRouteInNewTab(route, params = {}, query = {}) {
        if (!route) return;

        let url = null;

        if (isObject(route)) {
            url = $router.resolve(route);
        } else {
            url = $router.resolve({ name: route, params, query });
        }

        if (url) {
            window.open(url.href, "");
        }
    }

    function copyToClipBoards(data) {
        if (!data) {
            $q.notify(
                {
                    message: "Path Not found",
                    color: "negative",
                    icon: "check_circle",
                    position: "center",
                },
                500
            );
            return;
        }
        copyToClipboard(data)
            .then(() => {
                $q.notify(
                    {
                        message: "Copied to clipboard",
                        color: "positive",
                        icon: "check_circle",
                        position: "center",
                    },
                    500
                );
            })
            .catch(() => {
                $q.notify(
                    {
                        message: "Something went wrong",
                        color: "negative",
                        icon: "check_circle",
                        position: "center",
                    },
                    500
                );
            });
    }

    return {
        $store,
        $router,
        $route,
        openRouteInNewTab,
        copyToClipBoards,
    };
}
