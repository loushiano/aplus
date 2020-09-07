
export  const SHOW_DIALOG = 'SHOW_DIALOG';
export  const HANDLE_CLOSE = 'HANDLE_CLOSE';
export const HAS_ERROR = "HAS_ERROR";
export const DISABLE_BACKDROP = "DISABLE_BACKDROP";
export const ENABLE_BACKDROP = "ENABLE_BACKDROP";
export const SET_DIALOG_COMPONENT = "SET_DIALOG_COMPONENT"

export function showDialog(component,title,showFooter=false,onSave=null,okButton="OK",isTabs=false,tabs=null) {
 
    return {type: SHOW_DIALOG,
            component:tabs!=null&&tabs.one.component!=null?tabs.one.component:component,
            showFooter:showFooter,
            title:title,
            backdrop:"true",
            onSave:onSave!=null?onSave:handleClose(),
            okButton:okButton,
            isTabs:isTabs,
            tabs:tabs
        };
}

export function disableBackDrop(){
    return {
        type:DISABLE_BACKDROP
    }
}

export function setDialogComponent(component){
    return {
        type:SET_DIALOG_COMPONENT,
        component:component
    }
}
export function enableBackDrop(){
    return {
        type:ENABLE_BACKDROP
    }
}

export function errorHappened(errorMessage )  {
    return {
        type:HAS_ERROR,
        errorMessage:errorMessage
    }
}

export function handleClose() {
    return {type: HANDLE_CLOSE};
}