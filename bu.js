let obj = [];
function pushTo() {
  obj.push({
    id: obj.length,
    onClick: () => {
      console.log(obj);
    },
  });
}
pushTo();
obj[0].onClick();
