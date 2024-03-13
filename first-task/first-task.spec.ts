// Exercício Prático 01
// O contexto

// Um empresa está desenvolvendo um sistema de gerenciamento ágil de software. Uma das funcionalidades é apoiar os desenvolvedores durante o
// planning poker, uma técnica de estimativa. Em uma sessão de planning poker, os desenvolvedores estimam o esforço necessário para construir
// uma funcionalidade específica do backlog. Depois que a equipe discute a funcionalidade, cada desenvolvedor fornece uma estimativa: um número
// que varia de um a qualquer número que a equipe defina. Números mais altos significam mais esforço para implementar a funcionalidade. Por
// exemplo, um desenvolvedor que estima que um recurso vale oito pontos espera que ele exija quatro vezes mais esforço do que um desenvolvedor
// que estima que o recurso valha dois pontos. O desenvolvedor com a menor estimativa e o desenvolvedor com a maior estimativa explicam seus
// pontos de vista aos outros membros da equipe. Depois de mais discussões, o planning poker se repete até que os membros da equipe concordem
// sobre quanto esforço o recurso levará.

// O método método faz parte do núcleo da funcionalidade de planning poker. Este método recebe uma lista de estimativas e produz, como saída,
// os nomes dos dois desenvolvedores que devem explicar seus pontos de vista. Os detalhes são mostrados a seguir:

// Método:
// identifyExtremes - O método deve receber uma lista de desenvolvedores e suas respectivas estimativas e retornar os dois desenvolvedores com
// as estimativas mais extremas.

// Entrada:
// Uma lista de estimativas (Estimates), cada uma contendo o nome do desenvolvedor e sua estimativa.

// Saída:
// Uma lista de Strings contendo o nome do desenvolvedor com a estimativa mais baixa e o nome do desenvolvedor com a estimativa mais alta

const identifyExtremes = require("./first-task");

// The task description states that the method must produce as output the names of the two developers who should explain their viewpoints, plus the method name
// is "identifyExtremes", so it should only return the array with the developers names if there are at least two developers with different estimates. Therefore,
// it should return an empty array or NULL if all developers have the same estimate.
describe("If all devs have the same estimate, should return NULL", () => {
  test("Only two devs", () => {
    const estimates = [
      {
        estimate: 5,
        name: "John",
      },
      {
        estimate: 5,
        name: "Leonard",
      },
    ];

    const res = identifyExtremes(estimates);

    expect(res).toBe(null);
  });
  test("More than two devs", () => {
    const estimates = [
      {
        estimate: 5,
        name: "John",
      },
      {
        estimate: 5,
        name: "Leonard",
      },
      {
        estimate: 5,
        name: "Fabian",
      },
    ];

    const res = identifyExtremes(estimates);

    expect(res).toBe(null);
  });
});

describe("If input has less than two devs, should return NULL bc there are no extremes", () => {
  // Thinking on this as part of a bigger flow, when there is only one dev, there shouldn't be a discussion, so return null
  test("Only one dev", () => {
    const estimates = [
      {
        estimate: 5,
        name: "John",
      },
    ];

    const res = identifyExtremes(estimates);

    expect(res).toBe(null);
  });
  describe("None dev", () => {
    test("Empty array as param", () => {
      const res = identifyExtremes([]);

      expect(res).toBe(null);
    });
    test("Nothing as param", () => {
      const res = identifyExtremes();

      expect(res).toBe(null);
    });
  });
});

// This test case was written by reading the identifyExtremes method and identifying it has a fault (there is an else where it should be only an if). The
// following test case was also written because of this fault, to assure there isn't a similar edge case.
describe("If there are two devs with different estimates, should return an array like: [<lowest estimate dev name>, <highest estimate dev name>]", () => {
  test("Lowest estimate first", () => {
    const estimates = [
      {
        estimate: 2,
        name: "John",
      },
      {
        estimate: 3,
        name: "Leonard",
      },
    ];

    const res = identifyExtremes(estimates);

    expect(res).toEqual(["John", "Leonard"]);
  });
  test("Highest estimate first", () => {
    const estimates = [
      {
        name: "Peter",
        estimate: 5,
      },
      {
        name: "Leonard",
        estimate: 3,
      },
    ];

    const res = identifyExtremes(estimates);

    expect(res).toEqual(["Leonard", "Peter"]);
  });
});
describe("If there are more than two devs with different estimates, should return an array like: [<lowest estimate dev name>, <highest estimate dev name>]", () => {
  // The following ones are to assure the method is finding the two correct devs when there is more than two.
  test("Lowest first, highest not last", () => {
    const estimates = [
      {
        name: "Peter",
        estimate: 2,
      },
      {
        name: "Leonard",
        estimate: 5,
      },
      {
        name: "Ben",
        estimate: 3,
      },
    ];

    const res = identifyExtremes(estimates);

    expect(res).toEqual(["Peter", "Leonard"]);
  });
  test("Lowest first, highest last", () => {
    const estimates = [
      {
        name: "Peter",
        estimate: 2,
      },
      {
        name: "Ben",
        estimate: 3,
      },
      {
        name: "Leonard",
        estimate: 5,
      },
    ];

    const res = identifyExtremes(estimates);

    expect(res).toEqual(["Peter", "Leonard"]);
  });
  test("Highest first, lowest not last", () => {
    const estimates = [
      {
        name: "Leonard",
        estimate: 5,
      },
      {
        name: "Peter",
        estimate: 2,
      },
      {
        name: "Ben",
        estimate: 3,
      },
    ];

    const res = identifyExtremes(estimates);

    expect(res).toEqual(["Peter", "Leonard"]);
  });
  test("Highest first, lowest last", () => {
    const estimates = [
      {
        name: "Leonard",
        estimate: 5,
      },
      {
        name: "Ben",
        estimate: 3,
      },
      {
        name: "Peter",
        estimate: 2,
      },
    ];

    const res = identifyExtremes(estimates);

    expect(res).toEqual(["Peter", "Leonard"]);
  });
  test("None first, lowest last", () => {
    const estimates = [
      {
        name: "Ben",
        estimate: 3,
      },
      {
        name: "Leonard",
        estimate: 5,
      },
      {
        name: "Peter",
        estimate: 2,
      },
    ];

    const res = identifyExtremes(estimates);

    expect(res).toEqual(["Peter", "Leonard"]);
  });
  test("None first, highest last", () => {
    const estimates = [
      {
        name: "Ben",
        estimate: 3,
      },
      {
        name: "Peter",
        estimate: 2,
      },
      {
        name: "Leonard",
        estimate: 5,
      },
    ];

    const res = identifyExtremes(estimates);

    expect(res).toEqual(["Peter", "Leonard"]);
  });
  test("None first, none last, lowest before highest", () => {
    const estimates = [
      {
        name: "Ben",
        estimate: 3,
      },
      {
        name: "Peter",
        estimate: 2,
      },
      {
        name: "George",
        estimate: 3,
      },
      {
        name: "Leonard",
        estimate: 8,
      },
      {
        name: "John",
        estimate: 5,
      },
    ];

    const res = identifyExtremes(estimates);

    expect(res).toEqual(["Peter", "Leonard"]);
  });
  test("None first, none last, highest before last", () => {
    const estimates = [
      {
        name: "Ben",
        estimate: 3,
      },
      {
        name: "Leonard",
        estimate: 8,
      },
      {
        name: "George",
        estimate: 3,
      },
      {
        name: "Peter",
        estimate: 2,
      },
      {
        name: "John",
        estimate: 5,
      },
    ];

    const res = identifyExtremes(estimates);

    expect(res).toEqual(["Peter", "Leonard"]);
  });
});

describe("If there is one highest and multiple lowest, should return an array like: [<the first lowest estimate dev name>, <highest estimate dev name>]", () => {
  test("Highest first", () => {
    const estimates = [
      {
        name: "Peter",
        estimate: 5,
      },
      {
        name: "Leonard",
        estimate: 2,
      },
      {
        name: "George",
        estimate: 3,
      },
      {
        name: "Fabian",
        estimate: 2,
      },
    ];

    const res = identifyExtremes(estimates);

    expect(res).toEqual(["Leonard", "Peter"]);
  });
  test("Lowest first", () => {
    const estimates = [
      {
        name: "Leonard",
        estimate: 2,
      },
      {
        name: "George",
        estimate: 3,
      },
      {
        name: "Peter",
        estimate: 5,
      },
      {
        name: "Fabian",
        estimate: 2,
      },
    ];

    const res = identifyExtremes(estimates);

    expect(res).toEqual(["Leonard", "Peter"]);
  });
});
describe("If there is one lowest and multiple highest, should return an array like: [<lowest estimate dev name>, <the first highest estimate dev name>]", () => {
  test("Lowest first", () => {
    const estimates = [
      {
        name: "Leonard",
        estimate: 2,
      },
      {
        name: "Peter",
        estimate: 5,
      },
      {
        name: "George",
        estimate: 3,
      },
      {
        name: "Fabian",
        estimate: 5,
      },
    ];

    const res = identifyExtremes(estimates);

    expect(res).toEqual(["Leonard", "Peter"]);
  });
  test("Highest first", () => {
    const estimates = [
      {
        name: "Peter",
        estimate: 5,
      },
      {
        name: "Leonard",
        estimate: 2,
      },
      {
        name: "Fabian",
        estimate: 2,
      },
      {
        name: "George",
        estimate: 3,
      },
    ];

    const res = identifyExtremes(estimates);

    expect(res).toEqual(["Leonard", "Peter"]);
  });
});

describe("If there are multiple lowest and multiple highest, should return an array like: [<the first lowest estimate dev name>, <the first highest estimate dev name>]", () => {
  test("Lowest first", () => {
    const estimates = [
      {
        name: "Leonard",
        estimate: 2,
      },
      {
        name: "Victor",
        estimate: 2,
      },
      {
        name: "George",
        estimate: 3,
      },
      {
        name: "Peter",
        estimate: 5,
      },
      {
        name: "Fabian",
        estimate: 5,
      },
    ];

    const res = identifyExtremes(estimates);

    expect(res).toEqual(["Leonard", "Peter"]);
  });
  test("Highest first", () => {
    const estimates = [
      {
        name: "Peter",
        estimate: 5,
      },
      {
        name: "Fabian",
        estimate: 5,
      },
      {
        name: "George",
        estimate: 3,
      },
      {
        name: "Leonard",
        estimate: 2,
      },
      {
        name: "Victor",
        estimate: 2,
      },
    ];

    const res = identifyExtremes(estimates);

    expect(res).toEqual(["Leonard", "Peter"]);
  });
});
