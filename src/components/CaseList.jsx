import {useState} from 'react'
import CaseItem from './CaseItem'

const CaseList = () => {
    const caseItem = [
        {title: 'Штык-нож | Autotronic', src: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zPYgJA7cW5moWfqPbhJ7TFhGRf4cZOhuDG_Zi73FbjrUtsaj_3cdORcQJqNw7YrFO5wbzvgZe9vJ3JyHA1uSlx4CqPygv330-muln14A/130fx97f/image.png', price: 32000, id: 1},
        {title: 'Штык-нож | Волны', src: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJG48ymmIWZqOf8MqjUxVRd4cJ5nqeXpdzx0FHgqhFqZmn6IY_DI1U8aFuB_FLql-nt1pe7tMybzHFmvCUj-z-DyAETkzcY/130fx97f/image.png', price: 47000, id: 2},
        {title: 'MP7 | Bloodsport', src: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFABz7P7YJgJA4NO5kJObmOXgDLfYkWNFpsRz3-qSpdis2AW3rhFvYWn3LISSdgRsYVzR8lC7lOm9gMO_786bwHd9-n51Z2R5ZH4/130fx97f/image.png', price: 400, id: 3},
        {title: 'Керамбит | Градиент', src: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlYG0kfbwNoTdn2xZ_Ity07iXrdzx3wHnqhc_YT-gd4PAJgRrZV2Eqwe2wOu5g8K47c_MySBkpGB8si99cQGQ/130fx97f/image.png', price: 90000, id: 4},
        {title: 'Спортивные перчатки | Ящик Пандоры', src: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eOmgZKbm_LLO77QgHIfvscm0rCQ9I2l2FftqkQ6Z2jycoDDdwc7Nw7W_AS9w725gJPu75ifmGwj5Hd3t3uSnQ/130fx97f/image.png', price: 127000, id: 5},
        {title: 'MP7 | Bloodsport', src: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFABz7P7YJgJA4NO5kJObmOXgDLfYkWNFpsRz3-qSpdis2AW3rhFvYWn3LISSdgRsYVzR8lC7lOm9gMO_786bwHd9-n51Z2R5ZH4/130fx97f/image.png', price: 400, id: 6},
        {title: 'MP7 | Bloodsport', src: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFABz7P7YJgJA4NO5kJObmOXgDLfYkWNFpsRz3-qSpdis2AW3rhFvYWn3LISSdgRsYVzR8lC7lOm9gMO_786bwHd9-n51Z2R5ZH4/130fx97f/image.png', price: 400, id: 7},
        {title: 'MP7 | Bloodsport', src: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFABz7P7YJgJA4NO5kJObmOXgDLfYkWNFpsRz3-qSpdis2AW3rhFvYWn3LISSdgRsYVzR8lC7lOm9gMO_786bwHd9-n51Z2R5ZH4/130fx97f/image.png', price: 400, id: 8},
        {title: 'MP7 | Bloodsport', src: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFABz7P7YJgJA4NO5kJObmOXgDLfYkWNFpsRz3-qSpdis2AW3rhFvYWn3LISSdgRsYVzR8lC7lOm9gMO_786bwHd9-n51Z2R5ZH4/130fx97f/image.png', price: 400, id: 9},
    ]
    const [isOpen, setOpen] = useState(false)
    const [balance, setBalance] = useState(10000)
    function caseOpen() {
        if (isOpen){
            setOpen(false)
            setRandomItemArr([])
        } else {
            setOpen(true)
            randomItem()
            setBalance(balance - 1000)
        }
        if (balance < 100) {
            setOpen(false)
        }
    }
    const [randomItemArr, setRandomItemArr] = useState([])
    function randomItem() {
        let rni = Math.round(Math.random() * caseItem.length)
        if (rni >= caseItem.length) {
            rni = rni - 1
        }
        setRandomItemArr([caseItem[rni]])
    }
    const saleItem = (item) => {
        setBalance(balance + item.price)
        caseOpen()
    }
    return (
        <div>
            <h1>Баланс: {balance} руб.</h1>
            {!randomItemArr.length
                ? <button onClick={caseOpen}>Открыть кейс за 1000 руб.</button>
                : <CaseItem setOpen={caseOpen} csi={randomItemArr} saleItem={saleItem}/>
            }
        </div>
    )
}

export default CaseList