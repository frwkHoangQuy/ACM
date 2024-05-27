import create from 'zustand';

const useNotificationStore = create((set) => ({
  isDisplayInteract: false,
  interactInput: {
    type: '',
    title: "",
    content: ""
  },
  interactType: "Create",
  displayInteract: () => set(() => ({ isDisplayInteract: true })),
  cancelInteract: () => set(() => ({ isDisplayInteract: false })),
  setInteractType: (type) => set(() => ({ interactType: type })),
  editInteract: (updatedFields) => set((state) => ({
    interactInput: {
      ...state.interactInput,
      ...updatedFields,
    }
  })),
  isDisplayContent: false,
  content: {
    date: "",
    time: "",
    sender: "",
    title: "",
    content: "",
  },
  toggleContent: (id) => set((state) => ({
    isDisplayContent: state.selectedNotificationId !== id || !state.isDisplayContent,
    selectedNotificationId: state.selectedNotificationId !== id ? id : null
  })),
  showContent: (data) => set((state) => ({
    content: {
      ...data,
    }
  })),
  selectedNotificationId: null,
  selectNotification: (id) => set(() => ({ selectedNotificationId: id })),
  clearNotification: () => set(() => ({ selectedNotificationId: null })),
}));

export default useNotificationStore;
