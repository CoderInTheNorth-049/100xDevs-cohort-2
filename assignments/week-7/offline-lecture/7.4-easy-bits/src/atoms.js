import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
});

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 12
});

export const totalNotificationsCount = selector({
    key: "totalNotificationsCount",
    get: ({get}) => {
        const networkct = get(networkAtom);
        const jobsct = get(jobsAtom);
        const messagesct = get(messagingAtom);
        const notificationsct = get(notificationsAtom);
        return networkct + jobsct + messagesct + notificationsct
    }
})