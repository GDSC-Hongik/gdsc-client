import { Input } from '@/components/common/Input';
import { Flex } from '@/components/common/Wrapper';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      join: '',
      joidn: ''
    },
    mode: 'onChange'
  });
  return (
    <Flex direction="column">
      <Input
        label="이름"
        value={watch('join')}
        {...register('join', { required: '필요', maxLength: 15 })}
        isError={errors.join ? true : false}
        errorText={errors.join?.message as string}
        placeholder="김홍익"
      />
      <Input
        label="이름"
        value={watch('joidn')}
        {...register('joidn', { required: '필요', maxLength: 15 })}
        isError={errors.joidn ? true : false}
        errorText={errors.joidn?.message as string}
        placeholder="김홍익"
      />
    </Flex>
  );
}

export default App;
