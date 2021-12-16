interface IfProps {
  test: boolean;
  children: any;
}

const If = (props: IfProps) => {
  if (props.test) {
    return props.children;
  }
  return false;
};

export default If;
