# Table Column Count

## Expected

| Table |
|-------|
| Cell  |
| Cell  |
| Cell  |

| Table | Header |
|-------|--------|
| Cell  | Cell   |
| Cell  | Cell   |
| Cell  | Cell   |

| Table | Header | Header |
|-------|--------|--------|
| Cell  | Cell   | Cell   |
| Cell  | Cell   | Cell   |
| Cell  | Cell   | Cell   |

## Too Few

| Table | Header |
|-------|--------|
| Cell  |
| Cell  | Cell   |
| Cell  |

{MD056:-4} {MD056:-2}

| Table | Header | Header |
|-------|--------|--------|
| Cell  |
| Cell  | Cell   |
| Cell  | Cell   | Cell   |

{MD056:-4} {MD056:-3}

## Too Many

| Table |
|-------|
| Cell  |
| Cell  | Cell  |
| Cell  |

{MD056:-3}

| Table | Header |
|-------|--------|
| Cell  | Cell   | Cell | Cell |
| Cell  | Cell   | Cell |
| Cell  | Cell   |

{MD056:-4} {MD056:-3}

| Table | Header | Header |
|-------|--------|--------|
| Cell  | Cell   | Cell   | Cell |
| Cell  | Cell   | Cell   |
| Cell  | Cell   | Cell   | Cell | Cell |

{MD056:-4} {MD056:-2}

## Mixed

| Table |
|-------|
| Cell  | Cell |
| Cell  |
| Cell  | Cell |

{MD056:-4} {MD056:-2}

| Table | Header |
|-------|--------|
| Cell  | Cell   | Cell |
| Cell  |
| Cell  | Cell   |

{MD056:-4} {MD056:-3}

| Table | Header | Header |
|-------|--------|--------|
| Cell  | Cell   | Cell   |
| Cell  | Cell   | Cell   | Cell |
| Cell  |

{MD056:-3} {MD056:-2}
