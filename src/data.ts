
export type SimpleBarData = {
    values: Array<number>;
}


export const simpleBarData : SimpleBarData ={
    values: [2,8,4, 1, 2]
}; 

export const simpleBarData2: SimpleBarData ={
    values: [5,2, 8, 2]
}; 

export const simpleBarData3: SimpleBarData = {
    values: new Array(1000).fill(true).map(() => Math.random())
}

const stackedBarData = {

    foo: [2, 4, 6], 
    bar: [],
    biz: [2, 5, 6]
}

export const boxPlots = [
    {
      min: 100,
      lowerQuartile: 200,
      median: 250,
      upperQuartile: 450,
      max: 650,
      average: 150
    },
    {
      min: 200,
      lowerQuartile: 400,
      median: 600,
      upperQuartile: 700,
      max: 800,
      average: 550
    },
    {
      min: 0,
      lowerQuartile: 200,
      median: 400,
      upperQuartile: 600,
      max: 800,
      average: 400
    }
  ];


  export const heatMapData= {

    values: ["Andy", "Billie", "Ceola", "Dean"].flatMap((v => {
        return ["a", "b","c","icecream", "brocolli", "sushi"].map(w => {
            return {
                user: v, 
                food: w, 
                numTimesEaten: Math.floor(Math.random() * 100)
            }
        })
    }))

  }