export function mapToArray<T>(objet: T[]): T[] {
    const array: T[] = [];

    for (const elem in objet) {
        array.push({
            ...objet[elem],
            id: elem,
        });
    }

    return array;
}