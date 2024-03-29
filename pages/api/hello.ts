// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { mock, Random } from 'mockjs'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-10': [{
        'id|+1': 1, // 属性 id 是一个自增数，起始值为 1，每次增 1
        'name|1': [Random.cname(), Random.cname(), Random.cname(), Random.cname()], // 从随机的4个数组中 去其中一个值
        'birthday|1': [Random.date('yyyy-MM-dd'), Random.date('yyyy-MM-dd'), Random.date('yyyy-MM-dd'), Random.date('yyyy-MM-dd')],
        'address|1': [Random.county(true), Random.county(true), Random.county(true)],
      }]
    })
  )
}
