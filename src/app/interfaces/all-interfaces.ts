export interface Register {
    activity_type: string;
    activity_title: string;
    name_of_trainer: string;
    description: string;
    ppm: number;
    subject: string;
    target_group: string;
    venue: string;
    date: string;
    accredited: string;
    nqf_level: string;
    start_time: string;
    end_time: string;
    equity_targets: number;
}


export interface Participant {
    surname: string;
    initials: string;
    persalNumber: string;
    distric: string;
    workplace: string;
    rank_pl: string;
    grade: string | string[];
    gender: string;
    race: string;
    disability: string;
    qualification: string;
    age: number;
    contact: string;
    email: string; }