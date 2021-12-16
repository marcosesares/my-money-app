declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    $: JQueryStatic;
    jQuery: JQueryStatic;
  }
}

export default global;
