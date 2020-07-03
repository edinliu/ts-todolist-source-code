const obj = {
  fu() {
    console.log('fu');
  },
};

const obj2 = JSON.parse(JSON.stringify(obj));

obj.fu();
