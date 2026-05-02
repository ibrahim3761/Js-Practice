interface Developer<T,X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releaseYear: string;
  };

  smartWatch: T;

  bike?: X
}

interface BrandcharaWatch {
    heartRate: string;
    stopWatch: boolean;
}

const poorDeveloper: Developer<BrandcharaWatch, {
    brand: "Yamaha";
    engineCapacity: "200cc";
}> = {
  name: "John Doe",
  salary: 500,
  device: {
    brand: "Lenovo",
    model: "ThinkPad X1 Carbon",
    releaseYear: "2020",
  },
  smartWatch: {
    heartRate: "80 bpm",
    stopWatch: true,
  },

};


interface RichDeveloperWatch {
    heartRate: string;
    stopWatch: boolean;
    callSupport: boolean;
    calculator: boolean;
    aiFeatures: boolean;
}

const richDeveloper: Developer<RichDeveloperWatch> = {
  name: "Jane Smith",
  salary: 50000,
  device: {
    brand: "Hp",
    model: "Envy 15",
    releaseYear: "2021",
  },
  smartWatch: {
    heartRate: "80 bpm",
    stopWatch: true,
    callSupport: true,
    calculator: true,
    aiFeatures: true,
  },
  bike: null,
};
