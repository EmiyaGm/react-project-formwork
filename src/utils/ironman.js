import Fibos from 'fibos.js'
import { MAINNET, MAINHOST, PORT } from './fibosConfig'

export function loadIronman(sucCb) {
    if (!window.ironman) {
        window.open("https://foironman.com/");
    } else {
        const ironman = window.ironman;
        // 防止别的网页应用 调用window.ironman 对象
        // window.ironman = null;
        // If you want to require a specific version of Scatter
        const foNetwork = {
            blockchain: "fibos",
            chainId: MAINNET,
            host: MAINHOST,
            port: PORT,
            protocol: "http"
        };

        const RequirefoNetwork = {
            blockchain: "fibos",
            chainId: MAINNET
        };

        // 给用户推荐网络， 第一次需要授权
        // ironman.suggestNetwork(foNetwork);
        // ironman.getIdentity 用户授权页面
        ironman
            .getIdentity({
                accounts: [RequirefoNetwork]
            })
            .then((identity) => {
                const account = identity.accounts.find(
                    (acc) => acc.blockchain === "fibos"
                );
                const {
                    name,
                    authority
                } = account;
                // FO参数
                const foOptions = {
                    authorization: [`${name}@${authority}`],
                    broadcast: true,
                    chainId: MAINNET
                };
                // 获取FO instance
                const fo = ironman.fibos(foNetwork, Fibos, foOptions, "http");
                const requiredFields = {
                    accounts: [foNetwork]
                };

                if (sucCb) {
                    sucCb(ironman, fo, requiredFields, account, foNetwork, identity);
                }
            })
            .catch((e) => {
                // TODO
            });
    }
}