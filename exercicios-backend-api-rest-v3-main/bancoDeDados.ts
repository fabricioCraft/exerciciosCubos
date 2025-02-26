export type TExame = {
  id: string,
  examinador: string,
  candidato: string,
  quantidadeEliminatorias: number,
  quantidadeGraves: number,
  quantidadeMedias: number,
  quantidadeLeves: number,
  aprovado: boolean
}
type TBancoDeDados = {
  exames: TExame[]

}

const bancoDeDados = {
  exames: [
    {
      id: "8dc60128-c057-43ee-95fa-2a38bd0ae441",
      examinador: "Jessica Little",
      candidato: "Conan Whitehead",
      quantidadeEliminatorias: 4,
      quantidadeGraves: 7,
      quantidadeMedias: 0,
      quantidadeLeves: 10,
      aprovado: false,
    },
    {
      id: "e0c4d939-c4d4-45db-8243-50a38077c527",
      examinador: "Leo Higgins",
      candidato: "Savannah Cobb",
      quantidadeEliminatorias: 7,
      quantidadeGraves: 3,
      quantidadeMedias: 6,
      quantidadeLeves: 9,
      aprovado: false,
    },
    {
      id: "24eab3bf-9679-4c02-a3f3-79beaa82c961",
      examinador: "Aimee Tyler",
      candidato: "Ralph Gonzalez",
      quantidadeEliminatorias: 0,
      quantidadeGraves: 0,
      quantidadeMedias: 0,
      quantidadeLeves: 1,
      aprovado: true,
    },
    {
      id: "64e4e31b-8490-45ca-a6db-53459fda509e",
      examinador: "Julian Miller",
      candidato: "Theodore Rice",
      quantidadeEliminatorias: 1,
      quantidadeGraves: 0,
      quantidadeMedias: 0,
      quantidadeLeves: 0,
      aprovado: false,
    },
    {
      id: "919f40b6-12e2-4c24-b0af-c33dc22a201d",
      examinador: "Briar Mathis",
      candidato: "Avram Jenkins",
      quantidadeEliminatorias: 0,
      quantidadeGraves: 0,
      quantidadeMedias: 1,
      quantidadeLeves: 1,
      aprovado: true,
    },
  ],
};

export default bancoDeDados;
