const createProductEntity = () => {
  return function make(info) {
    const { name, color, price } = info;
    if (!name) {
      throw new Error("Please enter name.");
    }
    if (!color) {
      throw new Error("Please enter color.");
    }
    if (!price) {
      throw new Error("Please enter price.");
    }
    return Object.freeze({
      getName: () => {
        return name;
      },
      getColor: () => {
        return color;
      },
      getPrice: () => {
        return price;
      },
    });
  };
};

export default createProductEntity;
