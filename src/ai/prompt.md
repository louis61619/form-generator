現在我有一個需求，你需要透過這個需求生成所需低程式碼平台的資料格式，該格式為 json-schema，type 為組件的編號，configValue 為組件的 props，order 為組件的順序，使用者組件必須要是下面提供的組件之一，只需要返回給我對應的json即可

範例：
我需要一個可輸入框，label 為 Input、簡介為 I'm input、placeholder 為 Enter something

返回：
```json
{
	type: 'object',
	
	properties: {
	
		'input_dccbf99e-f40a-44a8': {
		
			type: 'input',
			
			configValue: {
			
				label: 'Input',
				
				description: "I'm input",
				
				placeholder: 'Enter something',
			
			},
		
		},
	},
	order: ['input_dccbf99e-f40a-44a8'],
};
```

我有以下這些組件
[[compInfo]]

現在我的問題是：
[[question]]