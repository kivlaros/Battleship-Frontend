export function isValidShipPlacement(fieldArr: number[][],isFinal:boolean): boolean {
    // Проверка что поле содержит только 0 и 1
    if (!fieldArr.flat().every(cell => cell === 0 || cell === 1)) {
        return false;
    }

    // Находим все корабли с помощью BFS
    const ships = getShips(fieldArr);
    
    // Проверка количества кораблей по правилам морского боя
    const expectedCounts: { [key: number]: number } = {
        1: 4, // 4 однопалубных
        2: 3, // 3 двухпалубных
        3: 2, // 2 трехпалубных
        4: 1  // 1 четырехпалубный
    };
    //console.log(ships)
    // Считаем количество кораблей каждого размера
    const sizeCounts: { [key: number]: number } = {};
    ships.forEach(ship => {
        const size = ship.length;
        if (size > 4) return false; // Корабль слишком большой
        sizeCounts[size] = (sizeCounts[size] || 0) + 1;
    });

    console.log(sizeCounts)

    // Сравниваем с ожидаемым количеством
    if(isFinal){
        for (const [sizeStr, expected] of Object.entries(expectedCounts)) {
        const size = parseInt(sizeStr);
        if (sizeCounts[size] !== expected) return false;
    }
    }
    for (const [sizeStr, expected] of Object.entries(expectedCounts)) {
        const size = parseInt(sizeStr);
        if (sizeCounts[size] > expected) return false;
    }
    // Проверка формы и окружения кораблей
    const occupied = new Set(ships.flat().map(([x, y]) => `${x},${y}`));
    
    for (const ship of ships) {
        if (!isShipValid(ship, occupied)) return false;
    }

    return true;
}

// Функция поиска кораблей (без изменений)
function getShips(fieldArr: number[][]): number[][][] {
    const visited = new Set<string>();
    const ships: number[][][] = [];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (fieldArr[i][j] === 1 && !visited.has(`${i},${j}`)) {
                const ship: number[][] = [];
                const queue: number[][] = [[i, j]];
                visited.add(`${i},${j}`);
                
                while (queue.length > 0) {
                    const [x, y] = queue.shift()!;
                    ship.push([x, y]);
                    
                    // Проверяем соседние клетки
                    for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
                        const nx = x + dx;
                        const ny = y + dy;
                        if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10 && 
                            fieldArr[nx][ny] === 1 && !visited.has(`${nx},${ny}`)) {
                            visited.add(`${nx},${ny}`);
                            queue.push([nx, ny]);
                        }
                    }
                }
                ships.push(ship);
            }
        }
    }
    return ships;
}

// Проверка отдельного корабля (без изменений)
function isShipValid(ship: number[][], occupied: Set<string>): boolean {
    const isRow = ship.every(([x], _, arr) => x === arr[0][0]);
    const isCol = ship.every(([, y], _, arr) => y === arr[0][1]);
    
    // Проверка прямой линии
    if (!isRow && !isCol) return false;
    
    // Проверка длины
    const minMax = isRow ? 
        [Math.min(...ship.map(([, y]) => y)), Math.max(...ship.map(([, y]) => y))] :
        [Math.min(...ship.map(([x]) => x)), Math.max(...ship.map(([x]) => x))];
    
    if (minMax[1] - minMax[0] + 1 !== ship.length) return false;

    // Проверка окружения
    for (const [x, y] of ship) {
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                const nx = x + dx, ny = y + dy;
                if (nx < 0 || nx >= 10 || ny < 0 || ny >= 10) continue;
                if (occupied.has(`${nx},${ny}`) && !ship.some(([sx, sy]) => sx === nx && sy === ny)) {
                    return false;
                }
            }
        }
    }
    
    return true;
}
