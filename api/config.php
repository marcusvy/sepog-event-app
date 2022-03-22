<?php
$output = json_encode([
  "enabled" => [
    "subscription" => true,
    "schedule" => true,
    "speakers" => false,
    "contact" => true,
    "realization" => true,
  ],
  "event" => [
    "title" => nl2br("Fórum Regional \nde Fortalecimento da \nREDE+BRASIL"),
    "subtitle" => "Etapa Rondônia",
    "start_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 08:00"),
    "end_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 17:00"),
    "start_time" => "09:00",
    "end_time" => "17:00",
    "address" => nl2br("Av. Farquar, 2986, Bairro Pedrinhas, Porto Velho - Rondônia \nPalácio Rio Madeira, Edifício Rio Pacaás Novos \nAuditório Governador Jerônimo Santana - 9º andar"),
    "assets" => [
      "event_logo" => '/assets/logo-redemaisbrasil.png',
      "event_hero_bg" => '/assets/hero.jpg',
    ],
    "subscription" => [
      "label" => "Fazer inscrição",
      "url" => "https://www.even3.com.br/checkout/d630b01d-bcfd-4184-9858-fb20b0de6ce3?i=25754458&lang=pt"
    ],
    "contact" => [
      "url" => "",
      "method" => strtolower("post")
    ],
    "schedule" => [
      [
        "task" => "Credenciamento",
        "start_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 08:00"),
        "end_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 09:00"),
      ],

      [
        "task" => "Formação da Mesa de autoridades ",
        "start_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 09:00"),
        "end_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 09:30"),
      ],

      [
        "task" => "Plataforma +Brasil e suas ferramentas de gestão e transparência; Rede+Brasil",
        "start_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 09:30"),
        "end_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 10:10"),
      ],

      [
        "task" => "Atuação e Relacionamento Rede +Brasil",
        "start_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 10:10"),
        "end_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 10:40"),
      ],

      [
        "task" => "Coffee Break",
        "start_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 10:40"),
        "end_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 11:00"),
      ],

      [
        "task" => "O Modelo de Excelência em Gestão das Transferências da União",
        "start_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 11:00"),
        "end_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 11:20"),
      ],

      [
        "task" => "Ciclo de Palestras com o tema: Captação de Recursos",
        "start_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 11:20"),
        "end_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 12:20"),
      ],

      [
        "task" => "Intervalo para Almoço",
        "start_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 12:20"),
        "end_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 14:00"),
      ],

      [
        "task" => "Ciclo de Palestras com o tema: Captação de Recursos",
        "start_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 14:00"),
        "end_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 16:50"),
      ],

      [
        "task" => "Momento interativo - perguntas e respostas - Plataforma e Rede +Brasil",
        "start_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 16:50"),
        "end_date" => date_create_immutable_from_format("d/m/Y H:i", "19/04/2022 17:30"),
      ],
    ]
  ],
  "realization" => [
    "organizers" => [
      "header" => "Realização",
      "logos" => [
        ["name" => "Secretaria de Estado do Planejamento Orçamento e Gestão", "image" => "/assets/hosts/gov_ro.png"],
      ]
    ],
    "partners" => [
      "header" => "Apoio",
      "logos" => [
        ["name" => "Ministério da Economia", "image" => "/assets/hosts/gov_br_me.png"],
      ]
    ]
  ],
  "sections" => [
    "subscription" => [
      "header" => "Inscrição",
      "lead" => "",
      "article" => nl2br("Os Fóruns Regionais têm por objetivo promover maior integração entre os parceiros da Rede +Brasil, de forma a fortalecer a governança, o diálogo, a gestão e a melhoria do gasto público, garantindo, assim, maior efetividade das políticas públicas implementadas com recursos públicos.\n
        Os Fóruns Regionais de Fortalecimento da Rede +BRASIL são uma parceria entre o Ministério da Economia e os parceiros da Rede +Brasil, rede de governança colaborativa que conta, atualmente, com 160 parceiros.\n
        A Etapa Rondônia contará com o eventos: Comitê de Integração da Rede +Brasil. Participe desse grande encontro que reunirá atores essenciais envolvidos na temática “Transferências de Recursos da União”.\n
        Para participar é simples! Preencha o formulário e verifique seu e-mail para confirmação.")
    ],
    "schedule" => [
      "header" => "Programação",
      "lead" => "Não perca nada, prepare-se para um grande evento.",
      "article" => ""
    ],
    "speakers" => [
      "header" => "Palestrantes",
      "lead" => "Todos unidos para um Brasil melhor",
      "article" => ""
    ],
    "contact" => [
      "header" => "Contato",
      "lead" => "Dúvidas ou sugestões, entre em contato com nossa equipe.",
      "article" => "",
    ],
  ],
]);

$fileOutput = realpath(__DIR__ . '/../src/assets/data/config.json');
file_put_contents($fileOutput, $output);
