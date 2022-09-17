//Array palavras possíveis
let palavrasPossiveis = ['sagaz', 'amago', 'negro', 'exito', 'mexer', 'abade', 'abono', 'abrir', 'abriu', 'acaso', 'acesa', 'aceso', 'achar', 'acima', 'acoes', 'acola', 'acude', 'adeus', 'adiar', 'advem', 'advir', 'aereo', 'afago', 'afeto', 'afins', 'afora', 'agape', 'agora', 'agudo', 'ainda', 'ajuda', 'alado', 'alamo', 'album', 'alcar', 'algoz', 'algum', 'alias', 'alibi', 'alude', 'aluno', 'amada', 'amado', 'ambar', 'ambas', 'ambos', 'amena', 'ameno', 'amiga', 'amigo', 'amplo', 'ancia', 'andar', 'anelo', 'anexo', 'animo', 'ansia', 'antes', 'antro', 'anuir', 'anzol', 'aonde', 'apear', 'apego', 'apelo', 'apice', 'apoio', 'apraz', 'aquem', 'arado', 'arcar', 'ardil', 'ardis', 'ardor', 'arduo', 'arfar', 'arido', 'aroma', 'arroz', 'artur', 'asilo', 'assar', 'assaz', 'assim', 'astro', 'ateia', 'atimo', 'ativo', 'atomo', 'atras', 'atrio', 'atroz', 'atual', 'atuar', 'audaz', 'audio', 'aurea', 'aureo', 'autor', 'autos', 'avaro', 'aviao', 'aviar', 'avida', 'avido', 'aviso', 'axila', 'baixa', 'banal', 'bando', 'banto', 'banzo', 'barao', 'barra', 'barro', 'bater', 'bazar', 'beata', 'bedel', 'beijo', 'benca', 'berro', 'besta', 'bioma', 'blase', 'boato', 'bocal', 'bolsa', 'bolso', 'bonus', 'botar', 'brabo', 'brado', 'brava', 'bravo', 'brega', 'breve', 'briga', 'brisa', 'bruma', 'bruta', 'bruto', 'bruxa', 'bulir', 'buril', 'burra', 'burro', 'busca', 'cabal', 'caber', 'cacar', 'cacho', 'cacto', 'caibo', 'caixa', 'calca', 'calda', 'calma', 'calmo', 'calor', 'calvo', 'campa', 'campo', 'canon', 'canso', 'canto', 'capaz', 'cardo', 'cargo', 'carma', 'carro', 'carta', 'casar', 'casta', 'casto', 'catre', 'causa', 'ceder', 'ceifa', 'ceita', 'cenho', 'censo', 'cerca', 'cerne', 'certa', 'certo', 'cesta', 'cetro', 'chaga', 'chama', 'chata', 'chato', 'chave', 'chefe', 'cheia', 'cheio', 'choca', 'chula', 'chulo', 'chuva', 'ciclo', 'cifra', 'cinto', 'cioso', 'cisao', 'cisco', 'cisma', 'citar', 'ciume', 'civel', 'civil', 'claro', 'clava', 'clean', 'clero', 'clima', 'close', 'cocar', 'cocho', 'coesa', 'coeso', 'coevo', 'coisa', 'combo', 'comer', 'comum', 'conta', 'conto', 'copia', 'coral', 'corar', 'corja', 'coroa', 'corpo', 'corso', 'corte', 'coser', 'cosmo', 'cousa', 'couve', 'cover', 'covil', 'cozer', 'credo', 'criar', 'crime', 'crise', 'crivo', 'cruel', 'culpa', 'culto', 'cunho', 'curso', 'custo', 'cutis', 'dados', 'danca', 'daqui', 'debil', 'deixa', 'demao', 'dengo', 'densa', 'denso', 'depor', 'deram', 'desde', 'dessa', 'desse', 'desta', 'deste', 'detem', 'deter', 'dever', 'devir', 'diabo', 'digna', 'dique', 'disso', 'dizer', 'dobro', 'docil', 'dogma', 'doido', 'doido', 'domar', 'dorso', 'douto', 'drama', 'drops', 'dubio', 'ebano', 'ebrio', 'ecoar', 'egide', 'elite', 'enfim', 'enjoo', 'entao', 'entre', 'epico', 'epoca', 'ereto', 'escol', 'esgar', 'estao', 'estar', 'etapa', 'etica', 'etico', 'etnia', 'exame', 'exato', 'exijo', 'exodo', 'expor', 'extra', 'facam', 'facho', 'facil', 'facto', 'faina', 'faixa', 'falar', 'falha', 'falsa', 'falta', 'farao', 'fardo', 'farei', 'farol', 'farsa', 'farta', 'farto', 'fatal', 'fator', 'fatos', 'fatuo', 'fauna', 'favor', 'fazer', 'fazes', 'fazia', 'feita', 'feito', 'feixe', 'feliz', 'fenda', 'ferir', 'feroz', 'ferpa', 'festa', 'feudo', 'ficar', 'ficha', 'filho', 'filme', 'final', 'finda', 'findo', 'finjo', 'firma', 'firme', 'fitar', 'fixar', 'flora', 'fluir', 'fluxo', 'folga', 'folha', 'folia', 'fonte', 'forca', 'forem', 'forma', 'forro', 'forte', 'forum', 'fossa', 'fosse', 'fosso', 'fraco', 'frase', 'frota', 'fruir', 'fruto', 'fugaz', 'fugir', 'fugiu', 'fundo', 'furor', 'fusao', 'futil', 'gabar', 'garbo', 'garra', 'genio', 'genro', 'gente', 'geral', 'gerar', 'gerir', 'gesto', 'giria', 'gleba', 'glosa', 'golpe', 'graca', 'grama', 'grata', 'grato', 'grave', 'grife', 'grota', 'grupo', 'gueto', 'guisa', 'habil', 'haver', 'havia', 'heroi', 'hiato', 'hifen', 'hobby', 'honra', 'horda', 'horto', 'hoste', 'houve', 'humor', 'icone', 'ideal', 'ideia', 'idolo', 'idoso', 'igneo', 'igual', 'ileso', 'impar', 'impio', 'impor', 'imune', 'inata', 'inato', 'indio', 'inter', 'inves', 'irado', 'irmao', 'itens', 'jazer', 'jazia', 'jeito', 'jejum', 'jeova', 'jirau', 'jogar', 'jovem', 'judeu', 'juizo', 'julia', 'junco', 'junto', 'justa', 'justo', 'labil', 'labor', 'laico', 'lapis', 'lapso', 'largo', 'lasso', 'laudo', 'lavra', 'lazer', 'legal', 'legua', 'leigo', 'leite', 'leito', 'lenda', 'lento', 'lesao', 'lesse', 'lesto', 'letal', 'letra', 'levar', 'liame', 'licao', 'lidar', 'lider', 'ligar', 'light', 'limbo', 'linda', 'lindo', 'linha', 'livre', 'livro', 'local', 'locus', 'logia', 'logos', 'logro', 'longe', 'longo', 'louca', 'louca', 'louco', 'louro', 'lousa', 'lucro', 'lugar', 'lutar', 'macio', 'macro', 'magia', 'magna', 'magoa', 'maior', 'malta', 'mamae', 'manga', 'manga', 'manha', 'manha', 'mania', 'manso', 'manto', 'marca', 'marco', 'massa', 'matar', 'matiz', 'medir', 'meiga', 'meigo', 'menos', 'mente', 'merce', 'mesma', 'mesmo', 'messe', 'metie', 'midia', 'mimar', 'minar', 'minha', 'miope', 'misto', 'mocao', 'mocho', 'modal', 'molde', 'molho', 'monge', 'monta', 'monte', 'moral', 'morar', 'morfo', 'morro', 'morte', 'mosto', 'motim', 'mouro', 'movel', 'mover', 'mudar', 'muito', 'mundo', 'museu', 'mutua', 'mutuo', 'nacao', 'nacar', 'narco', 'nariz', 'natal', 'navio', 'negar', 'nenem', 'nesga', 'nessa', 'nesse', 'nesta', 'neste', 'nicho', 'nisso', 'nivel', 'nobre', 'nocao', 'nodoa', 'noite', 'norma', 'nossa', 'nosso', 'notar', 'nunca', 'nuvem', 'oasis', 'obice', 'obito', 'obtem', 'obter', 'obvio', 'ocaso', 'odiar', 'olhar', 'ontem', 'opaco', 'opcao', 'optar', 'ordem', 'orfao', 'orgao', 'ornar', 'otica', 'otimo', 'ousar', 'outra', 'outro', 'ouvir', 'oxala', 'pacto', 'pagao', 'pagar', 'paiol', 'paira', 'pajem', 'papel', 'parar', 'parca', 'parco', 'pardo', 'pareo', 'paria', 'parte', 'parva', 'parvo', 'pasma', 'pasmo', 'passa', 'passe', 'passo', 'patio', 'pauta', 'pavio', 'pavor', 'pazes', 'pecha', 'pedir', 'pedra', 'pegar', 'peita', 'peixe', 'penca', 'penso', 'penta', 'perco', 'perto', 'pesar', 'peste', 'piada', 'piche', 'pifio', 'pilar', 'pinho', 'pique', 'plaga', 'plano', 'platô', 'plebe', 'plena', 'pleno', 'pluma', 'plumo', 'pobre', 'podar', 'poder', 'podio', 'podre', 'poema', 'poeta', 'polis', 'pomar', 'pompa', 'ponha', 'ponto', 'porem', 'porta', 'porte', 'possa', 'posse', 'posso', 'posta', 'posto', 'pouco', 'prado', 'praga', 'praia', 'praxe', 'prazo', 'prece', 'preco', 'presa', 'preso', 'preto', 'prime', 'prive', 'probo', 'prole', 'prosa', 'proto', 'prova', 'prumo', 'psico', 'puder', 'pudor', 'pugna', 'puido', 'pulha', 'punha', 'quais', 'quase', 'queda', 'quica', 'quite', 'quota', 'radio', 'raiar', 'raiva', 'ranco', 'rapaz', 'razao', 'reaca', 'recem', 'redea', 'redor', 'refem', 'refil', 'reger', 'regia', 'regio', 'regra', 'reino', 'reler', 'reles', 'relva', 'remir', 'renda', 'rente', 'repor', 'reses', 'resto', 'retem', 'reter', 'retro', 'revel', 'rever', 'reves', 'rezar', 'rigor', 'risco', 'riste', 'ritmo', 'rival', 'rocha', 'rogar', 'roubo', 'rouca', 'round', 'roupa', 'rubro', 'ruido', 'ruina', 'rumor', 'rural', 'saber', 'sabia', 'sabia', 'sabia', 'sabio', 'sabor', 'sadio', 'saiba', 'saida', 'saldo', 'salmo', 'salva', 'salve', 'salvo', 'sanar', 'santo', 'sarau', 'sarca', 'saude', 'seara', 'secao', 'segar', 'segue', 'seita', 'seiva', 'seixo', 'selar', 'senao', 'senda', 'sendo', 'senil', 'senso', 'sente', 'serao', 'serie', 'serio', 'servo', 'sesta', 'setor', 'sexta', 'sexto', 'sigla', 'signo', 'silvo', 'simio', 'sinha', 'sinto', 'sitio', 'skate', 'sobre', 'socio', 'sofia', 'soldo', 'solta', 'solto', 'sonho', 'sonsa', 'sonso', 'sorte', 'sosia', 'sotao', 'staff', 'stand', 'suave', 'subir', 'sucia', 'sugar', 'sulco', 'sumir', 'super', 'supor', 'supra', 'surja', 'surra', 'surto', 'sutil', 'tacha', 'tacho', 'tange', 'tanto', 'tarde', 'tchau', 'tecer', 'tedio', 'temer', 'temor', 'tempo', 'tenaz', 'tende', 'tendo', 'tenha', 'tenra', 'tenro', 'tenso', 'tento', 'tenue', 'termo', 'terno', 'terra', 'teste', 'tetra', 'texto', 'tibio', 'ticao', 'tinha', 'tirar', 'tiver', 'toada', 'tocar', 'todas', 'todos', 'tomar', 'torco', 'torna', 'torpe', 'torso', 'tosco', 'traco', 'traga', 'trago', 'trair', 'traje', 'trama', 'trato', 'treta', 'tribo', 'troca', 'troca', 'troco', 'troco', 'trupe', 'tumba', 'turba', 'turma', 'turva', 'turvo', 'tutor', 'ubere', 'ufano', 'ultra', 'umido', 'uniao', 'unica', 'unico', 'urdir', 'urgia', 'urgir', 'usual', 'usura', 'uteis', 'vacuo', 'vadio', 'vagar', 'valer', 'valha', 'valia', 'valor', 'vario', 'vasta', 'vasto', 'vazao', 'vazia', 'vazio', 'vedar', 'velar', 'velha', 'velho', 'veloz', 'vemos', 'venal', 'vendo', 'venha', 'venho', 'venia', 'vento', 'verao', 'verba', 'verbo', 'verde', 'versa', 'verso', 'verve', 'vetar', 'vetor', 'vezes', 'vicio', 'video', 'viger', 'vigia', 'vigor', 'vilao', 'vimos', 'vinha', 'viram', 'virao', 'virar', 'viria', 'viril', 'virus', 'visao', 'visar', 'visse', 'vista', 'visto', 'vital', 'vivaz', 'viver', 'voila', 'volta', 'volto', 'voraz', 'vosso', 'vulgo', 'vulto', 'xampu', 'xeque', 'xucro', 'zelar', 'zumbi']
//Randomização da palavra
let randomizacaoPalavra = Math.floor(Math.random()*palavrasPossiveis.length);
//Palavra randomizada
let palavraRandom = palavrasPossiveis[randomizacaoPalavra];
//Transformação palavra em array de letras
let palavraRandomArray = palavraRandom.split('')

function tentativa1() {
    for (let i = 0; i < palavraRandomArray.length; i++) {
        let letra = (document.getElementById(`campo${i}`).value).toLowerCase();
        let letraContida = palavraRandom.includes(`${letra}`)
        let proximaLinha = String(i)+String(i)
        let elementoLinhaAtual = document.getElementById(`campo${i}`)
        let elementoProximaLinha = document.getElementById(`campo${proximaLinha}`)

        console.log(letra)
        console.log(letraContida)

        document.getElementById(`campo${i}`).style.color = 'black';
        document.getElementById(`${letra}`).style.color = 'black';
       
        if (letraContida === true && letra === palavraRandomArray[i]) {
            console.log("Letra encontrada na mesma posicao");
            document.getElementById(`campo${i}`).style.backgroundColor = '#009f03';
            document.getElementById(`${letra}`).style.backgroundColor = '#009f03';
        } else if (letraContida === true) {
            console.log("Letra encontrada em posicao diferente");
            document.getElementById(`campo${i}`).style.backgroundColor = 'yellow';
            document.getElementById(`${letra}`).style.backgroundColor = 'yellow';
        } else {
            console.log("Letra não encontrada");
            document.getElementById(`campo${i}`).style.backgroundColor = 'red';
            document.getElementById(`${letra}`).style.backgroundColor = 'red';
            
        }

        elementoLinhaAtual.disabled = true;
        elementoProximaLinha.disabled = false;

    }    
}













function resetar() {
    location.reload();
    
}

function apagar() {

}

function cliqueTeclado() {
    
}














//Função para dar "refresh" na palavra

//Retorno parabéns