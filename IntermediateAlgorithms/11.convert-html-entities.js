//Convert the characters &, <, >, " (double quote), and ' (apostrophe),
//in a string to their corresponding HTML entities.

function convertHTML(str) {
	return (str = str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;'));
}

convertHTML('Dolce & Gabbana');

/**
 * 2nd Solution:
 * 
 * htmlEntities={
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '"':'&quot;',
        '\'':"&apos;"
      };
      //Use map function to return a filtered str with all entities changed automatically.
      return str.split('').map(entity => htmlEntities[entity] || entity).join('');
    }
 */
