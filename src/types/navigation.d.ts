export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      register: undefined;
      login: undefined;
      home: {
        screen: 'Andamento' | 'Finalizados';
      };
      Finalizados: undefined;
      Andamento: undefined;
      Solicitação: undefined;
      Solução: {
        id: string;
      };
      Concluído: {
        id: string;
      };
    }
  }
}

type RootStackParamList = {
  register: undefined;
  login: undefined;
  Solicitação: undefined;
};

