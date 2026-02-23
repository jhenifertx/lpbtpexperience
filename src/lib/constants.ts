import { AlertTriangle, Database, Layers, Lock, MonitorX, Settings } from 'lucide-react';

export const PROBLEMS = [
    {
        icon: Settings,
        title: "Customizações Excessivas",
        description: "Z-codes que comprometem o Clean Core e dificultam atualizações."
    },
    {
        icon: Layers,
        title: "Integrações Frágeis",
        description: "Conexões ponto-a-ponto sem governança ou monitoramento."
    },
    {
        icon: Database,
        title: "Dados Inconsistentes",
        description: "Bases sujas que limitam o potencial de IA e Analytics."
    },
    {
        icon: MonitorX,
        title: "Uso Limitado do BTP",
        description: "Dificuldade para usar a plataforma de forma estratégica."
    },
    {
        icon: AlertTriangle,
        title: "Riscos no S/4HANA",
        description: "Projetos de migração com alto risco e custo elevado."
    },
    {
        icon: Lock,
        title: "Operação Reativa",
        description: "Manutenção cara e foco apenas em apagar incêndios."
    }
];
