
export interface IVerb {
    id: number;
    infinitive: string;
    simple_past: string[];
    participle_past: string[];
    translate: string;
}

export const verbsList: IVerb[] = [
    {
        id: 1, 
        infinitive: 'Arise',
        simple_past: ['Arose'],
        participle_past: ['Arisen'],
        translate: 'Surgir, Levantarse'
    },
    {
        id: 2,
        infinitive: 'Awake',
        simple_past: ['Awoke'],
        participle_past: ['Awoken'],
        translate: 'Despertarse'
    },
    {
        id: 3,
        infinitive: 'Be/ am, are, is',
        simple_past: ['Was', 'Were'],
        participle_past: ['Been'],
        translate: 'Ser/Estar'
    },
    {
        id: 4,
        infinitive: 'Bear',
        simple_past: ['Bore'],
        participle_past: ['Borne', 'Born'],
        translate: 'Sorportar/Dar a luz'
    },
    {
        id: 5,
        infinitive: 'Become',
        simple_past: ['Became'],
        participle_past: ['Became'],
        translate: 'Llegar a ser'
    },
];