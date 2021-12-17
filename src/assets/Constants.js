export const SystemConfig = {
  BACK_END_CONFIG: {
    ORDERS_SERVER: {
      IP: "http://192.168.15.16",
      PORT: "8082",
    },
    PRODUCTS_SERVER: {
      IP: "http://192.168.15.16",
      PORT: "8081",
    },
  },
  SYSTEM_CONFIG: {
    MAX_WIDTH: "1280px",
  },
  COLORS_CONFIG: {
    BORDERS_COLOR: "#a9a9a9",
    COLOR_WHITE: "#ffffff",
    PRIMARY_COLOR: "#ff4500",
    SECONDARY_COLOR: "#ffece6",
    SELECTED_ROW: "#ff7440",
    WARNING_RED: "#f12711",
    WARNING_YELLOW: "#fee400",
  },
  SYSTEM_CONSTANTS: {
    LOGIN_CONSTANTS: {
      app_intro: "Bem vindo(a) ao Churras Já",
      user_password: "Senha",
      login_button: "Entrar",
      user_name: "Usuário",
    },
  },
  ERRORS_CONSTANTS: {
    PRODUCTS_PAGE: {
      CREATE_PRODUCT_ERROR: "Erro ao criar Produto",
      DELETE_PRODUCT_ERROR: "Erro para deletar o produto",
      EDIT_PRODUCT_ERROR: "Erro para editar o Produto",
      GET_PRODUCTS_ERROR: "Erro ao obter os Produtos",
    },
    LOGIN_PAGE: {
      LOGIN_ERROR: "Erro ao efetuar Login (usuário e/ou senha incorreto(s))",
    },
    STOCK_PAGE: {
      GET_STOCK_ERRORS: "Erro ao obter os produtos do estoque",
      ADD_STOCK_ERROR: "Erro ao adicionar produto no estoque",
      EDIT_STOCK_ERROR: "Erro para editar esse produto",
      DELETE_STOCK_ERROR: "Erro para deletar esse produto",
    },
    SALES_PAGE: {
      GET_ORDER_ERROR: "Erro ao obter os dados da página",
    },
    ORDERS_PAGE: {
      GET_ORDERS_ERROR: "Error ao obter os dados da página",
      CHANGE_STATUS_ERROR: "Erro ao mudar o status do pedido",
      REJECT_ORDER_ERROR: "Erro ao rejeitar o pedido",
    },
    CATEGORIES_MANAGEMENT: {
      ADD_CATEGORY_ERROR: "Categoria adicionada",
      EDIT_CATEGORY_ERROR: "Categoria editada",
      GET_CATEGORY_ERROR: "Erro ao obter as categorias",
    },
    USER_MANAGEMENT: {
      ADD_USER_ERROR: "Erro ao criar usuário",
    },
  },
  SUCCESS_CONSTANTS: {
    PRODUCTS_PAGE: {
      CREATE_PRODUCT: "Produto adicionado a sua lista",
      EDIT_PRODUCT: "Produto editado ",
      DELETE_PRODUCT: "Produto deletado ",
    },
    LOGIN_PAGE: {
      LOGIN_SUCCESS: "Login efetuado (Bem Vindo(a) ao Churras Já)",
    },
    STOCK_PAGE: {
      ADD_STOCK: "Produto adicionado ao estoque",
      EDIT_STOCK: "Produto editado com sucesso",
      DELETE_STOCK: "Produto deletado",
    },
    SALES_PAGE: {},
    ORDERS_PAGE: {
      CHANGE_STATUS: "Status do pedido modificado",
      REJECT_ORDER: "Pedido rejeitado",
    },
    CATEGORIES_MANAGEMENT: {
      ADD_CATEGORY: "Categoria adicionada",
      EDIT_CATEGORY: "Categoria editada",
    },
    USER_MANAGEMENT: {
      ADD_USER: "Usuário criado!",
    },
  },
};